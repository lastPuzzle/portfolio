'use client';

import React from 'react';
import { HangulMotion } from 'react-hangul-motion';
import { Button } from '@/components/ui/button';
import { Github, Download } from 'lucide-react';

export default function Intro() {
  const [showButtons, setShowButtons] = React.useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.download = '이승혁_경력기술서.pdf';
    link.href = '/resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMotionComplete = () => {
    setShowButtons(true);
  };

  return (
    <div className="flex flex-col space-y-4">
      <HangulMotion
        text="사용자 중심의 가치를 기술로 실현하는\n프론트엔드 개발자 이승혁입니다."
        className="text-xl font-semibold"
        speed={15}
        onComplete={handleMotionComplete}
      />
      {showButtons && (
        <div className="animate-fade-in flex flex-col space-y-4">
          <p className="text-sm">
            8년의 경험으로 레거시 시스템 현대화, 트래픽 성능 최적화 등 복잡한
            기술 문제를 해결해왔습니다.
            <br />
            5인 팀의 리더로서 개발 문화와 프로세스를 함께 만들고 성장시켰습니다.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.open('https://github.com/lastPuzzle', '_blank')
              }
              className="flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadResume}
              className="flex items-center gap-2"
            >
              <Download size={16} />
              경력 기술서
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
