import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "1",
    title: "O pequeno príncipe - Edição de bolso",
    isbn: "9788561706210",
    authorId: "HarperCollins",
    length: "2011",
    category: "Antoine de Saint-Exupéry",
    idioma: "Português",
    peso: "20",
    comprimento: "4",
    largura: "15",
    altura: "23"
  },
  {
    id: "2",
    title: "O historiador",
    isbn: "9788573029932",
    authorId: "Ponto",
    length: "2009",
    category: "Elizabeth Kostova",
    idioma: "Português",
    peso: "23",
    comprimento: "6",
    largura: "16",
    altura: "21"
  },
  {
    id: "3",
    title: "Prazeres Malditos",
    isbn: "9788532522498",
    authorId: "Rocco",
    length: "2013",
    category: "Laurell K. Hamilton",
    idioma: "Português",
    peso: "21",
    comprimento: "4",
    largura: "18",
    altura: "22"
  },
  {
    id: "4",
    title: "Operação Valquíria",
    isbn: "9788501082978",
    authorId: "Record",
    length: "2011",
    category: "Philipp Freiherr",
    idioma: "Português",
    peso: "16",
    comprimento: "6",
    largura: "10",
    altura: "20"
  },
  {
    id: "5",
    title: "O CAO DOS BASKERVILLE",
    isbn: "9788599187395",
    authorId: "DIGERATI",
    length: "2002",
    category: "Arthur Conan Doyle",
    idioma: "Português",
    peso: "15",
    comprimento: "5",
    largura: "15",
    altura: "25"
  },
  {
    id: "6",
    title: "Fallen (Vol. 1)",
    isbn: "9788501089625",
    authorId: "Galera",
    length: "2006",
    category: "Lauren Kate",
    idioma: "Português",
    peso: "20",
    comprimento: "4",
    largura: "10",
    altura: "26"
  },
  {
    id: "7",
    title: "Gamorra",
    isbn: "9788528613681",
    authorId: "Bertrand",
    length: "2011",
    category: "Roberto Saviano",
    idioma: "Português",
    peso: "23",
    comprimento: "8",
    largura: "18",
    altura: "21"
  },
  {
    id: "8",
    title: "A sombra do vento",
    isbn: "9788560280094",
    authorId: "Suma",
    length: "2012",
    category: "Carlos Ruiz Zafón",
    idioma: "Português",
    peso: "19",
    comprimento: "5",
    largura: "15",
    altura: "25"
  },
  {
    id: "9",
    title: "O Último Segredo do Templo",
    isbn: "9788528613742",
    authorId: "Bertrand",
    length: "2014",
    category: "Paul Sussman",
    idioma: "Português",
    peso: "20",
    comprimento: "5",
    largura: "18",
    altura: "23"
  },
  {
    id: "10",
    title: "O Segredo do Anel",
    isbn: "9788532520968",
    authorId: "Rocco",
    length: "1998",
    category: "Kathleen McGowan",
    idioma: "Português",
    peso: "20",
    comprimento: "8",
    largura: "20",
    altura: "30"
  },
  {
    id: "11",
    title: "Labirinto",
    isbn: "9788573027686",
    authorId: "Suma",
    length: "2015",
    category: "Kate Mosse",
    idioma: "Português",
    peso: "29",
    comprimento: "5",
    largura: "18",
    altura: "21"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id === course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => course.id === courseId);
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }


  static getCourse(courseId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingCourseIndex = courses.findIndex(course => course.id === courseId);

        const courseFound = Object.assign({}, courses[existingCourseIndex]);

        resolve(courseFound);

      }, delay);
    });
  }

}

export default CourseApi;
