import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  // data passing from child to parent component with decorator and EventEmitter, emit with same name
  // @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // data passing from child to parent component with decorator and EventEmitter, emit with alias name
  @Output('svCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value // using template reference variable with @ViewChild() decorator.
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value // using template reference variable with @ViewChild() decorator.
    });
  }

}
