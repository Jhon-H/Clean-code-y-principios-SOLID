(() => {

  // No aplicando el principio de responsabilidad unica

  type Gender  = 'M' | 'F'

  // class Person {
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;

  //   constructor(name: string, gender: Gender, birthdate: Date) {
  //     this.name = name
  //     this.gender = gender
  //     this.birthdate = birthdate
  //   }
  // }

  interface PersonProps {
    name: string, 
    gender: Gender, 
    birthdate: Date
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;
  
    constructor({ name, gender, birthdate }: PersonProps) { 
      this.name = name
      this.gender = gender
      this.birthdate = birthdate
    }
  }

  
  interface UserProps extends PersonProps {
    email: string,
    role: string,
  }

  class User extends Person {
    public email: string
    public role: string
    public lastAccess: Date

    constructor({
      email,
      role,
      name,
      gender,
      birthdate        
    }: UserProps) {
      super({ name, gender, birthdate })
      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    checkCredentials() {
      return true
    }
  }

  
  interface UserSettingsProps extends UserProps {
    workingDirectory: string,
    lastOpenFolder: string,
  }

  class UserSettings extends User {
    public workingDirectory: string
    public lastOpenFolder: string

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name, 
      gender, 
      birthdate
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate })
      this.lastOpenFolder = lastOpenFolder
      this.workingDirectory = workingDirectory
    }
  }

 

})()