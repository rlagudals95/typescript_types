{
    // type을 object로 서로 묶을 수 있다.
    type PageInfo = {
        title: string;
    }
    type Page = 'home' | 'about' | 'contact';

    // key : Page , value : PageInfo
    const nav: Record<Page, PageInfo> = {
        home: { title: 'Home' },
        about: { title: 'About' },
        contact: {title: 'Contact'}
    }

    type Product = 'cat' | 'dog'

    type NewProduct = Capitalize<Product>; // Cat | Dog 대문자 변환

}