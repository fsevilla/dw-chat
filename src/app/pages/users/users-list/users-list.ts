import { Component, OnInit, signal } from '@angular/core';
import { User as UserService } from '../services/user';
import { User } from '../types/user';
import { CommonModule } from '@angular/common';
import { Overlay } from '../../../shared/components/overlay/overlay';

@Component({
  selector: 'dw-users-list',
  imports: [CommonModule, Overlay],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList implements OnInit {

  users: User[] = [];
  // isLoading = false;
  isLoading = signal<boolean>(false);

  constructor(private userSerivce: UserService) {}

  ngOnInit() {
    // this.isLoading = true;
    this.isLoading.set(true);
    this.userSerivce.getAll().subscribe({
      next: (response) => {
        this.users = response;
        this.isLoading.set(false);
      }, // success
      error: (err) => {
        this.isLoading.set(false);
      }
    });
  }

}
