import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  counter = 0

  salary = 88

  oneTask = ""

  friends = ["Nanu", "Zanu", "Kanu", "Manu", "Tanu", "Aanu"]

  score = [ 25, 5, 1, 0, 88, 55, 44, 4]

  myDate = new Date()

  myTasks= [
          'Go an get some mango lassi',
          'Plan the weekend',
          'Identify some examples',
          'Some more task....',
          'Where is the fruit shop?'
        ]

  constructor() { }

  ngOnInit() {
  }

  sayHello = function(){
    ++this.counter
    console.log("Button clicked: " + this.counter)
    this.myTasks.push(this.oneTask)

    this.oneTask = ""

  }

  taskDone(ct){
    console.log("Index value: " +ct);
    this.myTasks.splice(ct,1 )
  }


}
