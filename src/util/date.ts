export namespace FunDate {
  export function ISOtoLocal(isoString: string): string {
    const isoDate = new Date(isoString);
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions
    const localdate = isoDate.toLocaleDateString('fnz', dateOptions);
    return localdate;
  }
}