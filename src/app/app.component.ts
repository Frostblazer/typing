import { Component } from '@angular/core';
import { lorem } from 'faker';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  userFinalInput = '';

  onChangeText(event: Event) {
    const target = event.target as HTMLInputElement;
    const userInput = target.value;
    this.userFinalInput = userInput;

    console.log(userInput.split(''));
    // console.log(userInput);
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
