import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/site-config';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const renderMenuItem = (item: any) => {
        if (item.type === 'internal') {
            return (
                <Link
                    to={item.link}
                    className="text-foreground transition-colors hover:text-primary"
                    onClick={closeMenu}
                >
                    {item.label}
                </Link>
            );
        } else if (item.type === 'anchor') {
            return (
                <a
                    href={item.link}
                    className="text-foreground transition-colors hover:text-primary"
                    onClick={closeMenu}
                >
                    {item.label}
                </a>
            );
        }
        return null;
    };

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
                isScrolled ? 'bg-background/80 shadow-sm backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link to="/" className="text-2xl font-bold text-foreground">
                    {siteConfig.site.name}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-6 md:flex">
                    {siteConfig.menu.map((item, index) => (
                        <div key={index}>{renderMenuItem(item)}</div>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center space-x-4 md:hidden">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                        <Menu />
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav
                className={`overflow-hidden border-t bg-background transition-all duration-300 md:hidden ${
                    isMobileMenuOpen ? 'max-h-[300px]' : 'max-h-0'
                }`}
            >
                <div className="container mx-auto flex flex-col space-y-3 px-4 py-2">
                    {siteConfig.menu.map((item, index) => (
                        <div key={index} className="py-2">
                            {renderMenuItem(item)}
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
