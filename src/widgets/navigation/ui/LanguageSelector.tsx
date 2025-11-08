import { Fragment } from 'react';
import { LANGUAGES } from '../config';
import { useLanguage } from '@/shared/hooks';

interface LanguageSelectorProps {
  variant: 'desktop' | 'mobile';
}

export const LanguageSelector = ({ variant }: LanguageSelectorProps) => {
  const { currentLanguage, onChangeLanguage } = useLanguage();
  
  if (variant === 'desktop') {
    return (
      <div className="hidden md:flex items-center gap-1 bg-darkBlue/50 backdrop-blur-sm px-3 py-2 rounded-full border border-blueGray/10">
        {LANGUAGES.map((lang, index) => (
          <Fragment key={lang}>
            <button 
              key={lang} 
              type={'button'}
              onClick={() => onChangeLanguage(lang)}
              className={`text-offWhite uppercase text-sm px-3 py-1 rounded-full ${lang === currentLanguage ? "bg-blueGray/20" : "hover:bg-blueGray/10"} transition-colors`}
            >
              {lang}
            </button>
            {index < LANGUAGES.length - 1 && <span className="text-blueGray/30">|</span>}
          </Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-6">
      {LANGUAGES.map((lang) => (
        <button 
          key={lang}
          type={'button'}
          onClick={() => onChangeLanguage(lang)}
          className="text-offWhite text-lg px-5 uppercase py-2 rounded-full border-2 border-offWhite/10 hover:border-offWhite/30 transition-all duration-300"
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
