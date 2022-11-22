type Size = '' | 'M' | 'S'

class Product {
  constructor(
    public name: string,
    public price: number = 0,
    public size: Size = '',
  ) {}

  toString() {
    if (this.name.length <= 0 ) throw Error('Name is empty')
    

    return `${this.name} ${this.price} ${this.size}`
  }
}

(() => {
  const bluePants = new Product('blue large poants')
})()