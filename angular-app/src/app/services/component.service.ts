// component.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  private componentsMap = new Map<string, any>();

  registerComponent(id: string, componentInstance: any): void {
    this.componentsMap.set(id, componentInstance);
  }

  updateProperty(id: string, newProperty: any): void {
    const component = this.componentsMap.get(id);
    if (component) {
      component.updateProperty(newProperty);
    }
  }
}
