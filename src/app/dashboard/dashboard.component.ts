import { Component, OnInit } from '@angular/core'
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  OPEN: any = [
    {
      refid: 1,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      invoice: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
    {
      refid: 2,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      INVOICE: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
    {
      refid: 3,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      INVOICE: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
  ]
  WIP: any = [
    {
      refid: 4,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      invoice: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
    {
      refid: 5,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      INVOICE: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
    {
      refid: 6,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      INVOICE: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
  ]
  READY: any = [
    {
      refid: 7,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      invoice: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
    {
      refid: 8,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      INVOICE: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
    {
      refid: 9,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      INVOICE: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
  ]
  PAYMENTDUE: any = [
    {
      refid: 10,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      invoice: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
    {
      refid: 11,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      INVOICE: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
    {
      refid: 12,
      vehiclename: 'Auris TR345',
      user: 'Ahmed',
      INVOICE: 'GP-LCVUZK-683',
      createdBy: 'VIDYUT',
      completedAt: '28 FEB 2021 02:54 PM',
      totalAmount: 'AED 799.05',
      amountDue: 'AED 299',
    },
  ]
  constructor() {}

  ngOnInit(): void {}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}
