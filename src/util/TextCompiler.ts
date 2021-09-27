import {IRasp} from "../DSTU/IRasp";

export class TextCompiler {
    public static Compile(rasp: IRasp[], mnemonic: string): string {
        if (rasp.length < 1) return `Пар на ${mnemonic} нет!`;

        let result =
            `Пары на ${mnemonic}\n\n`;

        rasp.forEach(lesson => {
            result += `
📌 ${lesson.pairNumber} пара
📕 ${lesson.type}: ${lesson.subject}
🏢 Аудитория: ${lesson.classRoom.corpus}-${lesson.classRoom.classRoom}
🔪 Вероятность отчисления: ${lesson.probability}%\n\n`;
        });

        result += 'Итого, вероятность твоего отчисления: 100%';

        return result;
    }
}
