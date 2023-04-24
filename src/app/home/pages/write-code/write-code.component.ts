import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-write-code',
  templateUrl: './write-code.component.html',
  styleUrls: ['./write-code.component.scss'],
})
export class WriteCodeComponent implements OnInit {
  @ViewChildren('inputTag') inputElem: ElementRef | undefined;

  firstFC = new FormControl('Write the text or code here. :)');
  secondFC = new FormControl('');
  inputtingText = false;
  redText = '';
  greenText = '';
  finished = false;
  constructor() {}

  ngOnInit(): void {
    this.firstFC.valueChanges.subscribe((_) => {
      this.onTextChange();
    });
    this.secondFC.valueChanges.subscribe((_) => {
      this.onTextChange();
    });
  }

  onTextChange() {
    let len_second_string = this.secondFC.value.length;
    let len_first_string = this.firstFC.value.length;
    let i;
    this.greenText = '';
    this.redText = '';
    for (i = 0; i < len_first_string; i++) {
      if (
        i < len_second_string &&
        this.firstFC.value[i] == this.secondFC.value[i]
      ) {
        this.greenText += this.firstFC.value[i];
      } else {
        break;
      }
    }
    this.redText += this.secondFC.value.slice(i);
    if (this.redText.length == 0 && this.greenText.length != 0) {
      this.finished = true;
    }
  }

  myTabFunction(event: any) {
    if (event.keyCode == 9) {
      this.firstFC.setValue(this.firstFC.value + '    ');
      return false;
    }
    return true;
  }
}
