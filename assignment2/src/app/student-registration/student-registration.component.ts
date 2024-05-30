import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  formData = {
    boardId: '',
    mediumId: '',
    standardId: '',
    studentName: '',
    password: '',
    confirmPassword: ''
  };
  boards: any[] = [];
  mediums: any[] = [];
  standards: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBoards();
  }

  getBoards() {
    this.http.get<any[]>('https://www.qlsacademy.com/api/board/').subscribe(data => {
      console.log(data)
      this.boards = data;
    });
  }

  onBoardChange() {
    this.http.get<any[]>('https://www.qlsacademy.com/api/medium/?board_id=' + this.formData.boardId).subscribe(data=>{
      console.log(data)
      this.mediums = data;
    });
  }

  onMediumChange() {
    this.http.get<any[]>('https://www.qlsacademy.com/api/standard/?medium_id=' + this.formData.mediumId).subscribe(data => {
      console.log(data) 
    this.standards = data;
    });
  }

  onSubmit() {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert("Password and Confirm Password must match.");
      return;
    }

    const postData = {
      student_name: this.formData.studentName,
      board_id: this.formData.boardId,
      medium_id: this.formData.mediumId,
      standard_id: this.formData.standardId,
      password: this.formData.password
    };
    console.log(postData)

    // Perform POST request
    this.http.post('https://www.qlsacademy.com/api/students/', postData).subscribe(response => {
      
      console.log('Student registration successful:', response);
      alert('Student registration successful');
    }, error => {
      console.log('Error registering student:', error);
      alert('Error registering student');
    });
  }
}

