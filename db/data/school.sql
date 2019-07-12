create table if not exists school (
  id int not null auto_increment,
  name varchar(255) not null,
  primary key(id)
);
insert into school(id, name) values
  (1, 'George Washington School'),
  (2, 'Thomas Jefferson School');

create table if not exists course (
  id int not null auto_increment,
  room varchar(10) not null,
  school_id int not null,
  teacher_id int not null,
  subject varchar(255) not null,
  start_time varchar(255) not null,
  stop_time varchar(255) not null,
  primary key(id)
);
insert into course(id, room, school_id, teacher_id, subject, start_time, stop_time) values 
  (1, '3A', 1, 1, 'World History', '9:00 AM', '10:00 AM'),
  (2, '2B', 2, 2, 'World History', '2:00 PM', '3:00 PM');

create table if not exists teacher (
  id int not null auto_increment,
  first_name varchar(255) not null,
  last_name varchar(255) not null,
  gender varchar(1) not null,
  primary key(id)
);
insert into teacher(id, first_name, last_name, gender) values 
  (1, 'Janice', 'Jackson', 'F'),
  (2, 'Joana', 'Johnson', 'F');

create table if not exists student (
  id int not null auto_increment,
  first_name varchar(255) not null,
  last_name varchar(255) not null,
  gender varchar(1) not null,
  primary key(id)
);
insert into student(id, first_name, last_name, gender) values
  (1, 'John', 'Doe', 'M'),
  (2, 'Jack', 'Smith', 'M'),
  (3, 'Joe', 'Johnson', 'M'),
  (4, 'Jared', 'Williams', 'M'),
  (5, 'Jake', 'Jones', 'M'),
  (6, 'Jane', 'Brown', 'F'),
  (7, 'Jenny', 'Davis', 'F'),
  (8, 'Julia', 'Miller', 'F'),
  (9, 'Janice', 'Wilson', 'F'),
  (10, 'Joyce', 'Moore', 'F');

create table if not exists enrollment (
  course_id int not null,
  student_id int not null
);
insert into enrollment(course_id, student_id) values 
  (1, 1),
  (1, 3),
  (1, 5),
  (1, 7),
  (1, 9),
  (2, 2),
  (2, 4),
  (2, 6),
  (2, 8),
  (2, 10);

create table if not exists grade (
  id int not null auto_increment,
  course_id int not null,
  student_id int not null,
  grade int not null,
  primary key(id)
);
insert into grade(course_id, student_id, grade) values
  (1, 1, 88),
  (1, 3, 75),
  (1, 5, 67),
  (1, 7, 99),
  (1, 9, 77),
  (2, 2, 90),
  (2, 4, 95),
  (2, 6, 90),
  (2, 8, 88),
  (2, 10, 83);