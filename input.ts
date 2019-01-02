import {NgControl} from "@angular/forms";
import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: 'input[nullValue]'
})
export class NullDefaultValueDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('input', ['$event.target'])
  onEvent(target: HTMLInputElement){
    this.control.viewToModelUpdate(target.value === '' ? 0 : target.value);
  }
  @HostListener('blur',['$event.target'])
  onBlur(target: HTMLInputElement){
      console.log(target.value);
     if(Number(target.value) === 0) {
        this.el.nativeElement.value = 0;
     }
  }
}