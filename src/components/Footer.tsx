import { siteConfig } from '@/data/site-config';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { site, contact, footer } = siteConfig;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary/30 py-12 text-muted-foreground">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-foreground">{site.name}</h3>
                        <p className="text-sm">{footer.description}</p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
                        <ul className="space-y-2">
                            {footer.links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.link}
                                        className="text-sm transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            {contact.social.github && (
                                <a
                                    href={contact.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                            )}
                            {contact.social.linkedin && (
                                <a
                                    href={contact.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            )}
                            {contact.social.twitter && (
                                <a
                                    href={contact.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                            )}
                            {contact.info.email && (
                                <a
                                    href={`mailto:${contact.info.email}`}
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    <Mail className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-8 text-center">
                    <p className="text-sm">
                        © {currentYear} {site.name}. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
