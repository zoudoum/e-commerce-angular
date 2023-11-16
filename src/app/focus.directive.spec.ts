import { FocusDirective } from './focus.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('FocusDirective', () => {
  it('should create an instance', () => {
    const elMock = {} as ElementRef<any>; // Utilisez un mock pour ElementRef
    const rendererMock = {} as Renderer2; // Utilisez un mock pour Renderer2
    const directive = new FocusDirective(elMock, rendererMock);

    expect(directive).toBeTruthy();
  });
});