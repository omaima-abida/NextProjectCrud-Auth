"use client"
import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import Image from "next/image"
import Button from 'react-bootstrap/Button';
//import {deleteArticle} from "@/services/ArticleService"
import { deleteArticle } from '...@/services/ArticleService';
import { useRouter } from "next/navigation";
import Link from 'next/link';
const Listproducts = ({produits}) => {
    const router = useRouter();
const deletearticle=(id)=>{
if(window.confirm("supprimer le produit O/N")) {

deleteArticle(id)
.then((res)=>{ console.log(res)
router.refresh()
})
.catch(error=>{
console.log(error)
})
}
}
const columns = useMemo(

() => [
{
accessorKey: 'imageart', //access nested data with dot notation
header: 'Image',
Cell: ({ cell}) => (
<Box
sx={{
display: 'flex',
alignItems: 'center',
gap: '1rem',
}}
>
<Image
src={cell.getValue()}
alt="product anme"
height="50"
width="50"
/>
</Box>),
},
{
accessorKey: 'reference', //access nested data with dot notation
header: 'Référence',
size: 100,
},
{
accessorKey: 'designation',
header: 'Désignation',
size: 100,
},
{

accessorKey: 'marque', //normal accessorKey
header: 'Marque',
size: 100,
},
{
accessorKey: 'prix',
header: 'Prix',
size: 100,
},
{
accessorKey: 'qtestock',
header: 'Stock',
size: 100,
},
{
    accessorKey: '_id',
    header: 'actions',
    size: 100,
    Cell: ({ cell, row }) => (
    <div >

<Button
variant="warning"
size="md"
className="text-warning btn-link edit"
>
<Link href={`/admin/products/update/${cell.row.original._id}`}>
<i class="fa-solid fa-pen-to-square"></i>
</Link>

</Button>
    







    <Button
    onClick={() => {
    console.log("modification ...")
    }}
    variant="warning"
    size="md"
    className="text-warning btn-link edit"
    >
    <i class="fa-solid fa-pen-to-square"></i>
    </Button>
    <Button
    onClick={(e) => {
    deletearticle(cell.row.original._id,e);
    }}
    variant="danger"
    size="md"
    className="text-danger btn-link delete"
    >
    <i className="fa fa-trash" />
    </Button>
    </div>
    ),
    },
],
[produits],
);
return (
<div>

<Button
variant='success'
size="sm"
style={{float: 'left','margin':10,'left':10,fontFamily:'Arial'}}>
<Link
href="/admin/products/new"
style={{
textDecoration: 'none',
color: 'white',
fontSize: 14,
}}
>
<i className="fa-solid fa-circle-plus">&nbsp;Nouveau</i>
</Link>
</Button>

{ produits && (
<MaterialReactTable columns={columns} data={produits} />)};
</div>
)
}
export default Listproducts