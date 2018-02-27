import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconUser, IconFile, IconBarChart2, IconFileText } from 'angular-feather';

const icons = [
  IconUser,
  IconFile,
  IconBarChart2,
  IconFileText
];

@NgModule({
  exports: icons
})
export class IconsModule { }
