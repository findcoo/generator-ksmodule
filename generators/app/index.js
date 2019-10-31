const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option("module", { type: String, default: "module"});
        this.option("mainClass", { type: String, default: "Main"});
        this.option("group", { type: String, default: "group"});
    }

    writing() {
        const { module, mainClass, group } = this.options;
        this.fs.copyTpl(this.templatePath("Main.kt"), this.destinationPath(`${module}/src/main/kotlin/${group.replace(/\./g, "/")}/${mainClass}.kt`), this.options);
        this.fs.copyTpl(this.templatePath("Test.kt"), this.destinationPath(`${module}/src/test/kotlin/${group.replace(/\./g, "/")}/${mainClass}.kt`), this.options);
        this.fs.copyTpl(this.templatePath("application.yml"), this.destinationPath(`${module}/src/main/resources/application.yml`));
        this.fs.copyTpl(this.templatePath("spring-configuration-metadata-whitelist.properties"), this.destinationPath(`${module}/src/main/resources/META-INF/spring-configuration-metadata-whitelist.properties`))
    }
};
