import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-components-data-binding',
  templateUrl: './components-data-binding.component.html',
  styleUrls: ['./components-data-binding.component.scss'],
  // encapsulation: ViewEncapsulation.None // can be emulated(default), none, native
})
export class ComponentsDataBindingComponent implements OnInit {

  serverElements: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onServerCreated(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintCreated(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

}
