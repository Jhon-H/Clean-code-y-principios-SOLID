(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, shouldDelete: false },
    { id: 2, shouldDelete: false },
    { id: 3, shouldDelete: true },
    { id: 4, shouldDelete: false },
    { id: 5, shouldDelete: false },
    { id: 7, shouldDelete: true },
  ]; 
  
  // Archivos marcados para borrar - files should delete
  const filesToDelete = filesToEvaluate.map( file => file.shouldDelete );

  class AbstractUser { };
  class UserMixin { };
  class UserImplementation { };
  interface IUser { };

  // Mejor
  class User { };
  interface User { };


  // Todo: Tarea
      
  // día de hoy - today
  const today = new Date();
  
  // días transcurridos - elapsed time in days
  const elapsedDays = 23;

  // número de archivos en un directorio - number of files in directory
  const numberOfFilesInDirectory = 33;
  
  // primer nombre - first name
  const firstName = 'Fernando';
  
  // primer apellido - last name
  const lastName = 'Herrera';

  // días desde la última modificación - days since modification
  const daysSinceModification = 12;
  
  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6;

})();

