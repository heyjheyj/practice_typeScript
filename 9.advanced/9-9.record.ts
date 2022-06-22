{
    type PageInfo = {
        title: string
    }

    type Page = 'home' | 'contact' | 'about'

    const nav: Record<Page, PageInfo> = {
        home: {title: 'home'},
        contact: {title: 'contact'},
        about: {title: 'about'}
    }
}
