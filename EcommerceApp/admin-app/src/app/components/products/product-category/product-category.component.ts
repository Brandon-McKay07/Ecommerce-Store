import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  // catergory observable
  public categoryObservable: Observable<any[]> = new Observable();
  
  prodCategoryBool: boolean = true;
  productCategoryForm:FormGroup = new FormGroup({});
  loader : boolean = false;
  tempFile: any;


  constructor(private categoriesService:CategoriesService,  private modalService: NgbModal,  private fb:FormBuilder) { }

  //the CategoryService call out is 'linking' the service file to this file, see above..

  ngOnInit(): void {
    this.categoryObservable = this.categoriesService.getCategories(); 
    //this returns an observable list from the called observable function above
    //the function getcategories() is within the service files,
    //it returns the information found in the json files.
    
  }

 
  openProductCategoryDialog(modelRef:any, productCategoryObj = null) {
    // console.log(productCategoryObj);    
    this.initialForm(productCategoryObj);
    this.modalService.open(modelRef);
  }

  initialForm(productCategoryObj: any = null) {
    if (productCategoryObj === null) {
      this.productCategoryForm = this.fb.group({
        categoryName: ["", Validators.required],
        categoryDescription: ["", Validators.required],
        categoryImageUrl: ["", Validators.required],
        categoryId: [null],
        active: [true],
        addedOn: [],
      });
    } else {
      this.productCategoryForm = this.fb.group({
        categoryName: [productCategoryObj.categoryName, Validators.required],
        categoryDescription: [productCategoryObj.categoryDescription, Validators.required],
        categoryImageUrl: [productCategoryObj.categoryImageUrl, Validators.required],
        categoryId: [productCategoryObj.categoryId],
        active: [productCategoryObj.active],
      });
    }
  }


  checkFileType(event: any) {
    this.tempFile = event.target.files[0];
    if (
      this.tempFile.type == "image/png" ||
      this.tempFile.type == "image/jpeg" ||
      this.tempFile.type == "image/jpg"
    ) {
      // console.log("File Ok");
    } else {
      // console.log("File not Ok");
      this.tempFile = null;
      // this.toast.show("Only .png/.jpeg/.jpg file format accepted!!");
    }
  }

}