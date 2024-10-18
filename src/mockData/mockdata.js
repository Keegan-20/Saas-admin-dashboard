import { Bug, Radio, ShieldEllipsis, UserRound } from 'lucide-react';
import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11 } from '../assets';

const pageMenus = {
    children:[
        {
            name:'User Profile',
            icon:ShieldEllipsis,
            children:[
                    {
                        name:'Overview',
                    },
                    {
                        name:'Projects'
                    },
                    {
                        name:'Campaigns'
                    },
                    {
                        name:'Documents'
                    },
                    {
                        name:'Followers'
                    }
            ]
        },
        {
            name:'Account',
            icon:ShieldEllipsis,
            children:[
                    {
                        name:'Test1'
                    },
            ]
        },
        {
            name:'Corporate',
            icon:ShieldEllipsis,
            children:[]
        },
        {
            name:'Blog',
            icon:ShieldEllipsis,
            children:[]
        },
        {
            name:'Social',
            icon:ShieldEllipsis,
            children:[
                {
                    name:'Test1'
                },
                {
                    name:'Test2'
                },
                {
                    name:'Test3'
                },
            ]
        }
    ]
}

const notification = [
    {
        message:'You have a bug that needs to be fixed.',
        time:'Just now',
        icon:Bug,
        color:'bg-[#E3F5FF]'
    },
    {
        message:'New user registered',
        time:'59 minutes ago',
        icon:UserRound,
        color:'bg-[#E5ECF6]'
    },
    {
        message:'You have a bug that needs to be fixed.',
        time:'12 hours ago',
        icon:Bug,
        color:'bg-[#E3F5FF]'
    },
    {
        message:'Andi Lane subscribed to you',
        time:'Today, 11:59 AM',
        icon:Radio,
        color:'bg-[#E5ECF6]'
    }
]

const activities = [
    {
        message:'You have a bug that needs to be fixed.',
        time:'Just now',
        image:image1
    },
    {
        message:'Released a new version',
        time:'59 minutes ago',
        image:image2
    },
    {
        message:"Submitted a bug",
        time:'12 hours ago',
        image:image3

    },
    {
        message:"Modified A data in Page X",
        time:"Today, 11:59 AM",
        image:image4
    },
    {
        message:'Deleted a page in Project X',
        time:'Feb 2, 2023',
        image:image5
    }

]

const contacts = [
    {
        name:'Natali Craig',
        image:image6
    },
    {
        name:'Drew Cano',
        image:image7
    },
    {
        name:'Orlando Diggs',
        image:image8
    },
    {
        name:'Andi Lane',
        image:image9
    },
    {
        name:'Kate Morrison',
        image:image10
    },
    {
        name:'Koray Okumus',
        image:image11
    },
]

const stats = [
    {
        name:'Customers',
        revenue:'3,781',
        profitLoss:'+11.01%',
        bg:"bg-[#E3F5FF] dark:bg-[#E3F5FF]",
        color:"text-primary",
        status:1
    },
    {
        name:'Orders',
        revenue:'1,219',
        profitLoss:'-0.03%',
        bg:'bg-[#F7F9FB] dark:bg-[#FFFFFF1A]',
        color:"text-primary dark:text-[#FFFFFF]",
        status:0
    },
    {
        name:'Revenue',
        revenue:'$695',
        profitLoss:'+15.03%',
        bg:'bg-[#F7F9FB] dark:bg-[#FFFFFF1A]',
        color:"text-primary dark:text-[#FFFFFF]",
        status:1
    },
    {
        name:'Growth',
        revenue:'30.1%',
        profitLoss:'+6.08%',
        bg:'bg-[#E5ECF6] dark:bg-[#E5ECF6]',
        color:"text-primary",
        status:1
    }
]

// data for revenue by location
const  revenueByLocation = [
    {   
        place:'New York',
        revenue:72
    },
    {   
        place:'San Francisco',
        revenue:39
    },
    {   
        place:'Sydney',
        revenue:25
    },
    {   
        place:'Singapore',
        revenue:61
    }
]

// Top selling products list - table head
const productsTableHead = [
        {
            label: 'Name'
        },
        {
            label: 'Price'
        },
        {
            label: 'Quantity'
        },
        {
            label: 'Amount'
        },
]

// Top selling products list - table body data
const productsTableData = [
    {
        name: 'ASOS Ridley High Waist',
        price:'$79.49',
        quantity:'82',
        amount:'$6,518.18'
    },
    {
        name: 'Marco Lightweight Shirt',
        price:'$128.50',
        quantity:'37',
        amount:'$4,754.50'
    },
    {
        name: 'Half Sleeve  Shirt',
        price:'$39.99',
        quantity:'64',
        amount:'$2,559.36'
    },
    {
        name: 'Lightweight Jacket',
        price:'$20.00',
        quantity:'184',
        amount:'$3,680.00'
    },
    {
        name: 'Marco Shoes',
        price:'$79.49',
        quantity:'64',
        amount:'$1,965.81'
    },
    {
        name: 'ASOS Ridley High Waist',
        price:'$79.49',
        quantity:'82',
        amount:'$6,518.18'
    }
]


//Total Sales data
const totalSales = [
    {
        by:'Direct',
        price:'$300.56',
        color:'text-[#1C1C1C] dark:text-[#C6C7F8]'
    },
    {
        by:'Affilliate',
        price:'$135.18',
        color:'text-[#BAEDBD]'
    },
    {
        by:'Sponsored',
        price:'$154.02',
        color:'text-[#95A4FC]'
    },
    {
        by:'E-mail',
        price:'$48.96',
        color:'text-[#B1E3FF]'
    }
]


// order list head label
const orderListHead = [
    {
        label:'Order ID'
    },
    {
        label:'User'
    },
    {
        label:'Project'
    },
    {
        label:'Address'
    },
    {
        label:'Date'
    },
    {
        label:'Status'
    }
]

//order list data
//Rejected:0 ,Complete: 1, Approved: 2, In Progress :3, Pending:4
const orderListData = [
    {
        _id:'#CM9801',
        name:'Natali Craig',
        image:image1,
        project:'Landing Page',
        address:'Meadow Lane Oakland',
        date:'Just now',
        status:3
    },
    {
        _id:'#CM9802',
        name:'Kate Morrison',
        image:image2,
        project:'CRM Admin pages',
        address:'Larry San Francisco',
        date:'A minute ago',
        status:1
    },
    {
        _id:'#CM9803',
        name:'Drew Cano',
        image:image3,
        project:'Client Project',
        address:'Bagwell Avenue Ocala',
        date:'1 hour ago',
        status:4
    },
    {
        _id:'#CM9804',
        name:'Orlando Diggs',
        image:image4,
        project:'Admin Dashboard',
        address:'Washburn Baton Rouge',
        date:'Yesterday',
        status:2
    },
    {
        _id:'#CM9805',
        name:'Orlando Diggs',
        image:image5,
        project:'App Landing Page',
        address:'Nest Lane Olivette',
        date:'Feb 2, 2023',
        status:0
    },
    {
        _id:'#CM9806',
        name:'Natali Craig',
        image:image6,
        project:'Landing Page',
        address:'Meadow Lane Oakland',
        date:'Just now',
        status:3
    },
    {
        _id:'#CM9807',
        name:'Kate Morrison',
        image:image7,
        project:'CRM Admin pages',
        address:'Larry San Francisco',
        date:'A minute ago',
        status:1
    },
    {
        _id:'#CM9808',
        name:'Drew Cano',
        image:image8,
        project:'Client Project',
        address:'Bagwell Avenue Ocala',
        date:'1 hour ago',
        status:4
    },
    {
        _id:'#CM9809',
        name:'Orlando Diggs',
        image:image9,
        project:'Admin Dashboard',
        address:'Washburn Baton Rouge',
        date:'Yesterday',
        status:2
    },
    {
        _id:'#CM98010',
        name:'Orlando Diggs',
        image:image10,
        project:'App Landing Page',
        address:'Nest Lane Olivette',
        date:'Feb 2, 2023',
        status:0
    },
]

export { pageMenus, notification, activities, contacts, stats, revenueByLocation, productsTableHead, productsTableData, totalSales, orderListHead, orderListData};
