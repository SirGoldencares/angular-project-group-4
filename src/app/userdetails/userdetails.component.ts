import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  userId: number = 0;
  user: User|undefined;

  profiles: string[] = [
    "A wizard in AI and machine learning, leading projects at top tech firms. A Python guru, chess enthusiast, with a quirky habit of naming algorithms after famous painters. Known for transforming complex concepts into user-friendly solutions, inspiring a team of budding AI enthusiasts.",
    "With 15 years in mobile app development, a Swift and Kotlin virtuoso. An avid rock climber, designs apps that climbers love, blending passions seamlessly. Spearheads innovative app features, drawing from extensive experience in responsive and adaptive design.",
    "Specializing in cybersecurity, known for fortifying systems like a digital fortress. Outside work, a gourmet chef, finding parallels between cooking and coding. Champions cybersecurity awareness, conducting workshops and creating robust, user-centric security frameworks.",
    "A front-end developer with a flair for intuitive UI/UX design. A comic book collector, drawing inspiration from superheroes for innovative designs. Leads creative brainstorming sessions, integrating storytelling into user experience, enhancing engagement and usability.",
    "An expert in cloud computing and SaaS platforms, revolutionizing data storage solutions. A jazz musician, infusing creativity into both code and compositions. Pioneers in cloud architecture, focusing on scalability and security, driving industry standards.",
    "A wizard with databases and big data analytics. An ultra-marathon runner, brainstorming database solutions on long runs. Implements data-driven strategies, optimizing performance and enhancing data visualization, leading a team towards data excellence.",
    "A VR and AR trailblazer, work in immersive technology is groundbreaking. In downtime, a sculptor, bringing virtual creations to life in clay. Innovates with user-centric designs, pushing the boundaries of virtual and augmented reality experiences.",
    "Known for expertise in blockchain technology, leading several successful crypto projects. A skilled gardener, cultivating plants with the same care as code. Develops decentralized applications, focusing on transparency and security, spearheading blockchain adoption.",
    "A master in embedded systems, work powers countless IoT devices. A vintage car restorer, applying the same precision to cars as to coding. Drives innovation in IoT, focusing on energy efficiency and sustainable solutions, mentoring young engineers.",
    "Specializes in software architecture, creating scalable and efficient systems. An amateur astronomer, spends nights exploring the stars. Leads projects focusing on system integration and architecture optimization, ensuring high performance and reliability."
  ];

  companies: string[] = [
    "A trailblazer in robotic automation, this company specializes in industrial robotics. They focus on enhancing manufacturing efficiency, integrating cutting-edge AI into their robotic solutions. Their collaborative robots are revolutionizing assembly lines worldwide.",
    "Known for its innovative household robots, this firm designs user-friendly robotic assistants. Their products range from cleaning to cooking robots, all aimed at simplifying daily chores. They emphasize intuitive design and are leaders in domestic robotics.",
    "A startup disrupting the healthcare industry with medical robots. From surgical assistants to rehabilitation bots, their creations are enhancing patient care. They prioritize precision and empathy in design, making significant strides in medical robotics.",
    "This company is at the forefront of underwater robotic exploration. They specialize in designing robots for marine research and conservation, contributing to oceanic discoveries. Their deep-sea robots are equipped with advanced sensors, unraveling the mysteries of the deep.",
    "A leader in space robotics, they develop rovers and robotic arms for extraterrestrial exploration. Their technology aids in planetary research, pushing the boundaries of space science. They're known for their durable designs, capable of withstanding extreme environments.",
    "Focused on agricultural robotics, this firm creates bots that revolutionize farming practices. From automated harvesters to drone crop monitoring, they aim to increase agricultural efficiency and sustainability. They're pioneering in precision agriculture technologies.",
    "Specializing in logistics and warehouse automation, this company's robots streamline inventory management. They develop autonomous forklifts and sorting robots, enhancing operational efficiency. They're transforming the logistics industry with smart, scalable solutions.",
    "In the field of entertainment, this company creates robotic systems for movie and theme park industries. Their animatronics and special effects robots bring fantasies to life, pushing the limits of robotic artistry and creativity.",
    "Dedicated to environmental conservation, they design robots for recycling and waste management. Their automated sorting and processing systems are aiding in sustainable waste handling, promoting eco-friendly practices in waste management.",
    "A pioneer in robotic companions for social interaction and assistance. Their human-like robots are designed for companionship, helping alleviate loneliness. They focus on emotional AI, creating empathetic and engaging robotic companions for all age groups."
  ];

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['userId'];
      this.getUserDetails();
    });
  }

  getUserDetails(): void {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });
  }

}
