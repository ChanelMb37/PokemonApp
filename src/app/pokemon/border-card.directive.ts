import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]", //cette directive s'sapplique sur les cartes des pokémons
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }
  @Input("pkmnBorderCard") borderColor: string; //alias
  //ecouter l'événement MouseEnter
  //lorske l'événement MouseEnter est appelé ,on modifie la couleur des bordures
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  //ecouter l'événement MouseLeave
  //lorske l'utilisateur déplace son curseur en dehors d'un pokemon ,la couleur de la bordure repreend la valeur initiale :this.setBorder("#f5f5f5")
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string) {
    let border = " solid 4px " + color;
    this.el.nativeElement.style.border = border;
  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  // setBorder(color: string) {
  //   this.el.nativeElement.style.border = `solid 4px ${color}`;
  // }
}
