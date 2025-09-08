'use client';

import { HangulMotion } from 'react-hangul-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { useAnimationStore } from '../../_lib/useAnimationStore';
import Image from 'next/image';

export default function Intro() {
  const introCompleted = useAnimationStore((state) => state.introCompleted);
  const setIntroCompleted = useAnimationStore(
    (state) => state.setIntroCompleted
  );

  const handleMotionComplete = () => {
    setIntroCompleted(true);
  };

  return (
    <div className="flex flex-col space-y-4">
      <HangulMotion
        text="사용자 중심의 가치를 기술로 실현하는\n프론트엔드 개발자 이승혁입니다."
        className="text-2xl font-semibold"
        skipAnimation={introCompleted}
        speed={15}
        onComplete={handleMotionComplete}
      />
      {introCompleted && (
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
              onClick={() =>
                window.open('https://story.lastpuzzle.site', '_blank')
              }
              className="flex items-center gap-2"
            >
              <Image
                src="/storybook.svg"
                alt="Storybook"
                width={16}
                height={16}
              />
              Storybook
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
