import Navabar from '@/components/client/Navabar'
export default function ClientLayout({ children }) {
return (
<>
<Navabar/>
{children}
</>
)
}