export namespace Str {
  export function capitalFirst(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}