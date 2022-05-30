import { Component, Injectable, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
//import { ModalConfig } from './modal.config'
//import { NgbModal, NgbModalRef } from 'bootstrap'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // @Input() public modalConfig: ModalConfig
  // @ViewChild('modal') private modalContent: TemplateRef<ModalComponent>
  // private modalRef: NgbModalRef

  // constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  // open() {
  //   this.modalRef = this.modalService.open(this.modalContent)
  //   this.modalRef.result.then()
  // }

  // close() {
  //   this.modalRef.close()
  // }

  // dismiss() {
  //   this.modalRef.dismiss()
  // }

}
