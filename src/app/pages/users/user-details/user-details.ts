import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User as UserService } from '../services/user';
import { User } from '../types/user';
import { Overlay } from "../../../shared/components/overlay/overlay";

@Component({
  selector: 'dw-user-details',
  imports: [Overlay, RouterModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails implements OnInit {

  userId: string | null = null;
  user: User | null = null;
  isLoading = signal<boolean>(false);

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    if (!this.userId) {
      // Redirect to the list 
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
      return;
    }

    // Get the selected user and compare if IDs match 
    const selectedUser = this.userService.getSelectedUser();

    if (selectedUser && selectedUser.id === this.userId) {
      this.user = selectedUser;
      return;
    }

    // Fetch user details from the API
    this.isLoading.set(true);
    this.userService.getUserById(this.userId).subscribe({
      next: (response) => {
        this.user = response;
        console.log('User: ', this.user)
        this.isLoading.set(false);
      },
      error:(e) => {
        console.log('Error fetching user: ', e);
        this.isLoading.set(false);
      }
    });

  }

}
