export namespace FunStr {
  export function capitalFirst(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  export function title(text: string, exclude:string[]=[]): string {
    if(!text.includes(" ")) return capitalFirst(text);
    const titleText: string = text.split(" ").filter(x=> x !== " ").map((x)=>{
      if(exclude.includes(x)) return x;
      return capitalFirst(x);
    }).join(" ").trim();
    return titleText;
  }

  export function foldWord(str: string, n:number, concatter: string="..."): string {
    if(str.length <= n) return str.trim();
    const strList: string[] = str.split("");
    return strList.slice(0, n).join("").trim().concat(concatter);
  }

  export function foldSentence(text: string, n: number, splitter:string = " "):string{
    if(!text.includes(splitter)) return text.trim();
    const strList: string[] = text.trim().split(splitter);
    if(strList.length < n){
      return strList.filter((x)=> x !== " ").join(" ");
    }
    return strList.slice(0,n).filter((x)=> x !== " ").join(" ").concat(" ...");
  }

  export function abbrev(text: string, n: number): string {
    if(text.length <= n && !text.includes(" ")) return text.trim();
    const strList: string[] = text.trim().split(" ").filter(x => x !== " ").map(x=> x.charAt(0).toUpperCase());
    return strList.join("").trim();
  }

  export function abbrevName(text: string, n:number): string {
    if(!text.includes(" ")) return text.trim();
    if(text.length <= n) return text.trim();
    const strList: string[] = text.trim().split(" ").filter(x => x !== " ");
    if (strList.length <= 2) return strList.join("").trim();
    const firstName: string = strList.slice(0,2).join(" ").trim();
    const abbreviation: string = strList.slice(2).map(x => x.charAt(0).toUpperCase()).join("").trim();
    return firstName.concat(" ", abbreviation);
  }
}