import { Component, OnInit, signal } from '@angular/core';
import { User as UserService } from '../services/user';
import { User } from '../types/user';
import { CommonModule } from '@angular/common';
import { Overlay } from '../../../shared/components/overlay/overlay';
import { DataTable } from '../../../shared/components/data-table/data-table';
import { DataTableColumn } from '../../../shared/types/data-table-column';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dw-users-list',
  imports: [CommonModule, Overlay, DataTable],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList implements OnInit {

  users: User[] = [];
  // isLoading = false;
  isLoading = signal<boolean>(false);

  columns: DataTableColumn[] = [
    { title: 'Name', property: 'name' },
    { title: 'Username', property: 'username' },
    { title: 'Email', property: 'email' }
  ]

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.isLoading = true;
    this.isLoading.set(true);
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response;
        this.isLoading.set(false);
      }, // success
      error: (err) => {
        this.isLoading.set(false);
      }
    });
  }

  handleItemSelected(user: User) {
    // redirect to the user's details page
    this.userService.setSelectedUser(user);
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute
    });
    
  }
}
