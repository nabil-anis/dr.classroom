import React from 'react';
import { YOUTUBE_CHANNEL_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-base font-semibold font-serif text-foreground">
              Dr. Sheryar's Classroom
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              &copy; 2025 Dr Sheryar’s Classroom — All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
             <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand-red transition-colors"
              aria-label="YouTube Channel"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM9.94 15.582V8.418L15.836 12 9.94 15.582Z" clipRule="evenodd"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dr_sheryar_classroom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand-red transition-colors"
              aria-label="Instagram Profile"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.117 0-3.483.011-4.695.067-2.61.12-3.962 1.48-4.088 4.088-.056 1.21-.067 1.575-.067 4.695s.011 3.483.067 4.695c.126 2.608 1.478 3.962 4.088 4.088 1.212.056 1.578.067 4.695.067s3.483-.011 4.695-.067c2.61-.12 3.962-1.48 4.088-4.088.056-1.21.067-1.575.067-4.695s-.011-3.483-.067-4.695c-.126-2.608-1.478-3.962-4.088-4.088-1.212-.056-1.578-.067-4.695-.067zM12 6.837c-2.846 0-5.163 2.317-5.163 5.163s2.317 5.163 5.163 5.163 5.163-2.317 5.163-5.163-2.317-5.163-5.163-5.163zm0 8.892c-2.053 0-3.729-1.676-3.729-3.729s1.676-3.729 3.729-3.729 3.729 1.676 3.729 3.729-1.676 3.729-3.729 3.729zm6.406-6.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;