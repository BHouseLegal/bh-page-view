import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/bh-core/bh-interfaces/bh-member';

@Component({
  selector: 'bh-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  @Input() public member!: Member;
  @Input() public isEven!: boolean;
  @Input() public isOdd!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
