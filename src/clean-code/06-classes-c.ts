(() => {

  // Aplicando el principio de responsabilidad unica
  // Priorizar la composicion frente a la herencia

  type Gender  = 'M' | 'F'


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

  
  interface UserProps {
    email: string,
    role: string,
  }

  class User {
    public email: string
    public role: string
    public lastAccess: Date

    constructor({
      email,
      role,        
    }: UserProps) {
      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    checkCredentials() {
      return true
    }
  }

  
  interface SettingsProps {
    workingDirectory: string,
    lastOpenFolder: string,
  }

  class Settings {
    public workingDirectory: string
    public lastOpenFolder: string

    constructor({
      workingDirectory,
      lastOpenFolder,
    }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder
      this.workingDirectory = workingDirectory
    }
  }

  // Composicion
  interface UserSettingsProps {
    workingDirectory: string,
    lastOpenFolder: string,
    email: string,
    role: string,
    name: string, 
    gender: Gender, 
    birthdate: Date
  }
  
  // Composicion
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name, gender, birthdate,
      email, role,
      lastOpenFolder, workingDirectory
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate })
      this.user = new User({ email, role })
      this.settings = new Settings({ lastOpenFolder, workingDirectory })
    }

  }
 

})()