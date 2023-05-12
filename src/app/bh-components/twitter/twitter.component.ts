import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  private _showPost: boolean = false;

  get showPost(): boolean {
    return this._showPost;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public togglePost(): void {
    this._showPost = !this._showPost;
  }

}
