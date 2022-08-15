import useWindowDimensions from 'hooks/useWindowDimensions';
import { useRef, useCallback, useState, useEffect } from 'react';
import * as S from './styled';

const Main = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const { width, height } = useWindowDimensions();
  const [context, setContext] = useState<any>(null);
  const [counter, setCounter] = useState<number>(0);
  const [letters] = useState<string>(
    '항상 발전하고 싶은 개발자, 이승혁입니다. 반복되는 일을 자동화 하고 비효율적인 프로세스를 개선하는 작업을 좋아하고 항상 Clean Code를 작성 하려 노력합니다.',
  );
  const [mouse, setMouse] = useState({ x: 0, y: 0, down: false });
  const [position, setPosition] = useState({ x: 0, y: height / 2 });

  useEffect(() => {
    if (counter > letters.length - 1) {
      setCounter(0);
    }
  }, [counter]);

  useEffect(() => {
    drawRact();
  }, [mouse]);

  const drawRact = useCallback(() => {
    const minFontSize = 40;
    if (mouse.down) {
      const d = distance(position, mouse);
      const fontSize = minFontSize;
      const letter = letters[counter];
      const stepSize = textWidth(letter, fontSize);

      if (d > stepSize) {
        const angle = Math.atan2(mouse.y - position.y, mouse.x - position.x);

        context.font = `${fontSize}px Black Han Sans`;

        context.save();
        context.translate(position.x, position.y);
        context.rotate(angle);
        context.fillText(letter, 0, 0);
        context.restore();

        setCounter(counter + 1);

        setPosition({
          x: position.x + Math.cos(angle) * stepSize,
          y: position.y + Math.sin(angle) * stepSize,
        });
      }
    }
  }, [mouse, position]);

  const distance = (pt: any, pt2: any) => {
    let xs = 0;
    let ys = 0;

    xs = pt2.x - pt.x;
    xs *= xs;

    ys = pt2.y - pt.y;
    ys *= ys;

    return Math.sqrt(xs + ys);
  };

  const mouseMove = useCallback(
    (event: any) => {
      setMouse({ ...mouse, x: event.offsetX, y: event.offsetY });
    },
    [mouse],
  );

  const mouseDown = (event: any) => {
    setMouse({ ...mouse, down: true });
    setPosition({ x: event.offsetX, y: event.offsetY });
    if (titleRef.current !== null) titleRef.current.style.display = 'none';
  };

  const mouseUp = () => {
    setMouse({ ...mouse, down: false });
  };

  const touchMove = (event: any) => {
    const touches = event.changedTouches;
    document.body.style.overflow = 'hidden';
    setMouse({
      ...mouse,
      x: touches[0].pageX,
      y: touches[0].pageY - 64,
    });
  };

  const touchStart = (event: any) => {
    const touches = event.changedTouches;
    setMouse({ ...mouse, down: true });
    setPosition({ x: touches[0].pageX, y: touches[0].pageY - 64 });
    if (titleRef.current !== null) titleRef.current.style.display = 'none';
  };

  const doubleClick = () => {
    if (!canvasRef.current) {
      return;
    }
    if (titleRef.current !== null) titleRef.current.style.display = 'block';
    canvasRef.current.width = width;
    setCounter(0);
  };

  const textWidth = (string: any, size: any) => {
    context.font = `${size}px Black Han Sans`;

    if (context.fillText) {
      return context.measureText(string).width;
    }
    if (context.mozDrawText) {
      return context.mozMeasureText(string);
    }

    return null;
  };

  useEffect(() => {
    if (!canvasRef.current) {
      return undefined;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;

    canvas.addEventListener('mousedown', mouseDown, { passive: true });
    canvas.addEventListener('mousemove', mouseMove, { passive: true });
    canvas.addEventListener('mouseup', mouseUp, { passive: true });
    canvas.addEventListener('touchstart', touchStart, { passive: true });
    canvas.addEventListener('touchmove', touchMove, { passive: true });
    canvas.addEventListener('touchend', mouseUp, { passive: true });
    canvas.addEventListener('dblclick', doubleClick, { passive: true });

    setContext(canvasRef.current?.getContext('2d'));

    return () => {
      canvas.removeEventListener('mousedown', mouseDown, false);
      canvas.removeEventListener('mousemove', mouseMove, false);
      canvas.removeEventListener('mouseup', mouseUp, false);
      canvas.removeEventListener('touchstart', touchStart, false);
      canvas.removeEventListener('touchmove', touchMove, false);
      canvas.removeEventListener('touchend', mouseUp, false);
      canvas.addEventListener('dblclick', doubleClick, false);
    };
  }, [mouseDown, mouseMove, mouseUp, touchStart, touchMove]);

  return (
    <S.Wrapper id="top">
      <canvas ref={canvasRef} width={width - 15} height={height - 64} />
      <span ref={titleRef}>
        클릭하고 드래그해서 그려보세요
        <br />
        (더블 클릭하면 내용이 지워집니다.)
      </span>
    </S.Wrapper>
  );
};

export default Main;
