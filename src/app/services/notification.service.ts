import { Injectable } from '@angular/core';
import * as Toastr from 'toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  success(msg1: string, msg2: string =""){
    Toastr.success(msg1, msg2,
    {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 2000,
      extendedTimeOut: 500,
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut"
    })
  }

  info(msg1: string, msg2: string =""){
    Toastr.info(msg1, msg2,
    {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 2000,
      extendedTimeOut: 500,
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut"
    })
  }

  warning(msg1: string, msg2: string =""){
    Toastr.warning(msg1, msg2,
    {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 2000,
      extendedTimeOut: 500,
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut"
    })
  }
  
}
