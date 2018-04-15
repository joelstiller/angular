import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DojoMail';
  emails = [
    {
      email: 'bob@whatever.com',
      important: true,
      subject: 'This is totally not spam',
      content: 'j/k please buy all my stuff'
    },
    {
      email: 'john@gmail.com',
      important: true,
      subject: 'How are you?',
      content: 'I hope you are well.'
    },
    {
      email: 'susan@gmail.com',
      important: false,
      subject: 'Gmail is the best!',
      content: 'You should join it.'
    },
    {
      email: 'trish@thatgirltrish.com',
      important: false,
      subject: 'Weeeee',
      content: 'Some content'
    }
  ];
}
