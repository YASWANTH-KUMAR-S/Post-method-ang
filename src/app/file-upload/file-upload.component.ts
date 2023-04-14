import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { FileUploadService } from '../file-upload.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  constructor(private fileUploadService: FileUploadService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileUploadService.uploadFile(file).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
