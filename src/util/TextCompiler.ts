import {IRasp} from "../DSTU/IRasp";

export class TextCompiler {
    public static Compile(rasp: IRasp[], mnemonic: string): string {
        if (rasp.length < 1) return `Пар на ${mnemonic} нет!`;

        let result =
            `Пары на ${mnemonic}\n\n`;

        rasp.forEach(lesson => {
            result += `📌 ${lesson.pairNumber} пара ${lesson.current ? '(Сейчас)' : ''} (${this.timeCompiler(lesson.lessonStart)} - ${this.timeCompiler(lesson.lessonEnd)})
📕 ${lesson.type}: ${lesson.subject}
🏢 Аудитория: ${lesson.classRoom.corpus}-${lesson.classRoom.classRoom}
🔪 Вероятность отчисления: ${lesson.probability}%
${lesson.classRoom.distance ? '❗️ Пара дистанционная' : ''}\n`;
        });

        return result;
    }

    public static ShortInfo(rasp: IRasp): string {
       return `📕 ${rasp.type}: ${rasp.subject}
⏱ ${this.timeCompiler(rasp.lessonStart)} - ${this.timeCompiler(rasp.lessonEnd)}
🏢 Аудитория: ${rasp.classRoom.corpus}-${rasp.classRoom.classRoom}${rasp.classRoom.distance ? '\n❗️ Пара дистанционная' : ''}`;
    }

    private static timeCompiler(date: Date): string {
        let h = date.getUTCHours() < 10 ? `0${date.getUTCHours()}` : date.getUTCHours();
        let m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        return `${h}:${m}`;
    }

}
