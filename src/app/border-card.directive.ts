import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]", //cette directive s'sapplique sur les cartes des pokémons
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder("#f5f5f5");
  }
  //ecouter l'événement MouseEnter
  //lorske l'événement MouseEnter est appelé ,on modifie la couleur des bordures
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder("009688");
  }

  //ecouter l'événement MouseLeave
  //lorske l'utilisateur déplace son curseur en dehors d'un pokemon ,la couleur de la bordure repreend la valeur initiale :this.setBorder("#f5f5f5")
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("#f5f5f5");
  }

  // private setBorder(color: string) {
  //   let border = " solid 4px " + color;
  //   this.el.nativeElement.style.border = border;
  // }
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
