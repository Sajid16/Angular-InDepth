import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-data-binding',
  templateUrl: './components-data-binding.component.html',
  styleUrls: ['./components-data-binding.component.scss']
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
