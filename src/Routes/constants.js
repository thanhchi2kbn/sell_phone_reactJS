import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import AppleIcon from '@mui/icons-material/Apple';
import InventoryIcon from '@mui/icons-material/Inventory';
export const MENUS = [
    {
        name: "Product Manager",
        path: "/admin/product",
        icon: <InventoryIcon /> 
    },

    {
        name: "Brand Manager",
        path: "/admin/brand",
        icon: <BrandingWatermarkIcon /> 
    },

    {
        name: "OS Manager",
        path: "/admin/os",
        icon: <AppleIcon /> 
    },
]