System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var votingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            votingComponent = (function () {
                function votingComponent() {
                    this.neutralVote = 0;
                    this.totalVotes = 0;
                    this.voteDown = false;
                    this.voteUp = false;
                }
                votingComponent.prototype.votedUp = function () {
                    var currVote = this.totalVotes;
                    if (currVote + 1 == this.neutralVote || currVote == this.neutralVote) {
                        this.totalVotes++;
                        this.voteDown = false;
                        if (this.totalVotes == this.neutralVote) {
                            this.voteUp = false;
                        }
                        else {
                            this.voteUp = true;
                        }
                    }
                };
                votingComponent.prototype.votedDown = function () {
                    var currVote = this.totalVotes;
                    if (currVote - 1 == this.neutralVote || currVote == this.neutralVote) {
                        this.totalVotes--;
                        this.voteUp = false;
                        if (this.totalVotes == this.neutralVote) {
                            this.voteDown = false;
                        }
                        else {
                            this.voteDown = true;
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], votingComponent.prototype, "neutralVote", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], votingComponent.prototype, "totalVotes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], votingComponent.prototype, "voteDown", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], votingComponent.prototype, "voteUp", void 0);
                votingComponent = __decorate([
                    core_1.Component({
                        selector: 'voting',
                        template: "\n        <table>\n            <tr>\n                <td class=\"td-style\">\n                    <i class=\"glyphicon glyphicon-menu-up\"\n                    [class.upHighLight]=\"voteUp\"\n                    (click)=\"votedUp()\"\n                    ></i>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"td-style\">\n                {{ totalVotes }}\n                </td>\n            </tr>\n            <tr>\n                <td class=\"td-style\">\n                    <i class=\"glyphicon glyphicon-menu-down\"\n                    [class.downHighLight]=\"voteDown\"\n                    (click)=\"votedDown()\"\n                    ></i>\n                </td>\n            </tr>\n        ",
                        styles: [
                            "\n            .td-style{\n                text-align: center;\n                padding: 10 10 10 10;\n            }\n            \n            .glyphicon-menu-up, .glyphicon-menu-down\n            {\n                cursor: pointer;\n                color: #ccc;\n            }\n\n            .upHighLight, .downHighLight{\n                color: orange;\n            }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], votingComponent);
                return votingComponent;
            }());
            exports_1("votingComponent", votingComponent);
        }
    }
});
//# sourceMappingURL=voting.component.js.map