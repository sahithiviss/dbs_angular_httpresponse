import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor() { }

  courses = [
    {
      name:"Java 8", 
      id:1,
      imgUrl:'../assets/angular.png', 
      price:8000,
      offer:true,
      duration:10,
      participants:0,
      rating:4.5667,
      launchDate:new Date(2019,5,21),
      instructor:{firstname:'Naveen',lastname:'kumar'}
    },
    {
      name:"Maven", 
      id:2, 
      price:4000,
      offer:false,
      imgUrl:'../assets/angular.png',
      duration:2,
      participants:0,
      rating:4.67667,
      launchDate:new Date(2019,5,21),
      instructor:{firstname:'Naveen',lastname:'kumar'}
    },
    {
      name:"Spring Boot", 
      id:3, 
      offer:true,
      price:10000,
      imgUrl:'../assets/angular.png',
      duration:8,
      participants:0,
      rating:4.865444,
      launchDate:new Date(2019,4,23),
      instructor:{firstname:'Naveen',lastname:'kumar'}
    },
    {
      name:"Hibernate", 
      id:4, 
      offer:true,
      imgUrl:'../assets/angular.png',
      price:8000,
      duration:4,
      participants:0,
      rating:3.786565,
      launchDate:new Date(2018,8,18),
      instructor:{firstname:'Naveen',lastname:'kumar'}
    },
    {
      name:"JPA", 
      id:5, 
      offer:false,
      price:8000,
      imgUrl:'../assets/angular.png',
      duration:4,
      participants:0,
      rating:3.56776,
      launchDate:new Date(2019,5,21),
      instructor:{firstname:'Naveen',lastname:'kumar'}
    },
    {
      name:"Angular", 
      id:6, 
      offer:false,
      price:10000,
      duration:4,
      imgUrl:'../assets/angular.png',
      participants:0,
      rating:4.5555,
      launchDate:new Date(2018,8,18),
    }
  ];

  getAllCourses():any[]{
    return this.courses;
  }
}
