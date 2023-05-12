import { Component, OnInit } from '@angular/core';
import { Members } from 'src/app/bh-core/bh-constants/members.const';
import { Member } from 'src/app/bh-core/bh-interfaces/bh-member';

@Component({
  selector: 'bh-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  public teamMembers: Member[] = Members;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
