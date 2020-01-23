import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'
import { MessagingService } from "./shared/messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularExample';
    message;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    const userId = 'user1';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }

}
