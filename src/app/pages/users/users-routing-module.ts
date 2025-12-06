import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersList } from './users-list/users-list';
import { NewUser } from './new-user/new-user';
import { UserDetails } from './user-details/user-details';
import { UpdateUser } from './update-user/update-user';
import { Users } from './users';

const routes: Routes = [
  { path: '', component: Users, children: [
    { path: '', component: UsersList },
    { path: 'new', component: NewUser },
    { path: ':id', component: UserDetails },
    { path: ':id/edit', component: UpdateUser }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
